type ProgressBarProps = {
  progress: number;
};

export default function ProgressBar({ progress }: ProgressBarProps) {
  return (
    <div className="w-full h-4 lg:h-6 bg-white border-2 border-black">
      <div className="h-full bg-black" style={{ width: `${progress}%` }}></div>
    </div>
  );
}
