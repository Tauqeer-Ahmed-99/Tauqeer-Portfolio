const TauqeerLogo = () => {
  return (
    <div className="flex items-center justify-center gap-2 p-1 rounded-lg text-primary backdrop-blur-sm">
      <div className="relative z-10 flex items-center justify-center w-8 h-8 border-2 rounded-full border-primary">
        <span className="text-xs font-bold">TA</span>
        <span className="px-1 absolute right-0 z-20 flex items-center justify-center w-5 h-2 gap-1 -rotate-[67deg] left-[60%] top-[55%] bg-background dark">
          <span className="inline-block w-1 h-1 rounded-full bg-primary"></span>
          <span className="inline-block w-1 h-1 rounded-full bg-primary"></span>
        </span>
      </div>
      <h1 className="font-bold">tauqeer ahmed</h1>
    </div>
  );
};

export default TauqeerLogo;
