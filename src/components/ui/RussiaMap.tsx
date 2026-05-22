import React, { useMemo, useEffect, useState, useRef } from 'react';
import * as topojson from 'topojson-client';
import { geoPath, geoAlbers } from 'd3-geo';
// @ts-ignore
import topology from 'world-atlas/countries-50m.json';

interface MarkerProps {
  name: string;
  coords: [number, number];
}

const markers: MarkerProps[] = [
  { name: 'УФА', coords: [55.9678, 54.7388] },
  { name: 'СИБАЙ', coords: [58.6667, 52.7167] },
  { name: 'АСКАРОВО', coords: [58.5133, 53.3361] },
];

export default function RussiaMap() {
  const [dimensions, setDimensions] = useState({ width: 800, height: 400 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observeTarget = containerRef.current;
    if (!observeTarget) return;

    const resizeObserver = new ResizeObserver(entries => {
      for (let entry of entries) {
        setDimensions({
          width: entry.contentRect.width,
          height: entry.contentRect.height
        });
      }
    });

    resizeObserver.observe(observeTarget);
    return () => resizeObserver.unobserve(observeTarget);
  }, []);

  const { pathData, markerPoints } = useMemo(() => {
    try {
      // Find Russia in the topology
      const russiaFeatureObj = topology.objects.countries.geometries.find(
        (g: any) => g.properties.name === 'Russia'
      );
      
      if (!russiaFeatureObj) return { pathData: null, markerPoints: [] };

      const russiaFeature = topojson.feature(topology as any, russiaFeatureObj as any) as any;

      // Project configuration to center Russia nicely
      const projection = geoAlbers()
        .rotate([-105, 0])
        .center([0, 65])
        .parallels([52, 64])
        .fitSize([dimensions.width, dimensions.height], russiaFeature);
        
      const generatePath = geoPath().projection(projection);
      const pathStr = generatePath(russiaFeature);

      const markerPts = markers.map(m => ({
        ...m,
        pixelPos: projection(m.coords)
      }));

      return { pathData: pathStr, markerPoints: markerPts };
    } catch (e) {
      console.error('Error generating map:', e);
      return { pathData: null, markerPoints: [] };
    }
  }, [dimensions]);

  return (
    <div ref={containerRef} className="w-full h-full relative" style={{ minHeight: '300px' }}>
      <svg className="w-full h-full overflow-visible" viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}>
        {pathData && (
          <path
            d={pathData}
            className="fill-[#1A1A1A] stroke-white/20 stroke-[1px] transition-all duration-700 hover:fill-[#222222] hover:stroke-white/30"
          />
        )}
        
        {markerPoints.map((m, i) => {
          if (!m.pixelPos) return null;
          const [x, y] = m.pixelPos;
          return (
            <g key={i} transform={`translate(${x}, ${y})`} className="group cursor-default">
              {/* Outer pulse */}
              <circle cx={0} cy={0} r={12} className="fill-red-600/20 animate-ping opacity-0 group-hover:opacity-100 transition-opacity" />
              {/* Inner dot */}
              <circle cx={0} cy={0} r={2.5} className="fill-red-600 shadow-[0_0_8px_rgba(220,38,38,0.8)]" />
              <circle cx={0} cy={0} r={1} className="fill-white" />
            </g>
          );
        })}
      </svg>
    </div>
  );
}
