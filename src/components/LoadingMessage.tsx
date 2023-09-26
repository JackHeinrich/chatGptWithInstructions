export default function LoadingMessage() {
  const AIColor = "#d4eeff";
  return (
    <div className="card p-2" style={{ backgroundColor: AIColor }}>
      <div className="card-body">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </div>
  );
}
