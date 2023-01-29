type ProgressBarProps = {
  progress: number;
};

export default function ProgressBar({ progress }: ProgressBarProps) {
  return (
    <div className="w-full h-4 lg:h-6 bg-white border border-black">
      <div
        className="h-full"
        style={{
          width: `${progress}px`,
          backgroundImage:
            "radial-gradient(#212121 20%, transparent 20%), radial-gradient(#212121 20%, transparent 20%)",
          backgroundColor: "#ffffff",
          backgroundPosition: "0 0, 7.5px 7.5px",
          backgroundSize: "15px 15px",
        }}
      ></div>
    </div>
  );
}
