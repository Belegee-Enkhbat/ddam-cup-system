interface ErrorScreenProps {
  error: string;
}

export function ErrorScreen({ error }: ErrorScreenProps) {
  return (
    <div className="flex items-center justify-center min-h-screen" style={{ backgroundColor: 'rgb(2, 6, 23)' }}>
      <div className="text-red-500 font-light">ERROR: {error}</div>
    </div>
  );
}
