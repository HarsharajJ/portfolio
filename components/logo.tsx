export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <div className="relative">
        <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-800 rounded-lg flex items-center justify-center shadow-lg">
          <div className="text-white font-bold text-xl">H</div>
        </div>
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
      </div>
      <div className="flex flex-col">
        <span className="text-white font-bold text-lg leading-none">HARSHARAJ</span>
        <span className="text-red-400 text-xs font-medium">AI ENGINEER</span>
      </div>
    </div>
  )
}
