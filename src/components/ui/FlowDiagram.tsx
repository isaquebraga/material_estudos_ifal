interface FlowDiagramProps {
  items: string[];
}

export default function FlowDiagram({ items }: FlowDiagramProps) {
  return (
    <div className="flex items-center justify-center gap-1.5 my-6 flex-wrap">
      {items.map((item, i) => (
        <div key={i} className="flex items-center gap-1.5">
          <div className="flow-item">
            {item}
          </div>
          {i < items.length - 1 && (
            <span className="flow-arrow">→</span>
          )}
        </div>
      ))}
    </div>
  );
}
