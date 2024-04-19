import { ArrowRight, MessageSquareText } from "lucide-react";

export default function ProductSupport() {
  return (
    <main className="flex flex-col items-center justify-center px-4 py-16 gap-12">
      <h1 className="text-4xl font-bold">Product Support</h1>
      <input
        type="text"
        placeholder="Search what you need"
        className="text-md p-4 bg-gray-800 rounded-md w-full md:w-[40rem]"
      />
      <div className="flex flex-wrap justify-center gap-4">
        <div className="bg-gray-800 flex flex-col items-center justify-center py-8 px-4 gap-4">
          <div className="p-4 rounded-full bg-teal-600">
            <MessageSquareText className="text-white" />
          </div>
          <h3 className="text-lg font-bold">Live Support</h3>
          <p className="text-gray-400 text-xs w-44 text-center">
            Commodo qui nulla ipsum ea cupidatat sit aliquip
          </p>
          <p className="text-xs text-teal-400 flex gap-1 items-center">
            Explore
            <span>
              <ArrowRight className="text-teal-400 size-3" />
            </span>
          </p>
        </div>
        <div className="bg-gray-800 flex flex-col items-center justify-center py-8 px-4 gap-4">
          <div className="p-4 rounded-full bg-teal-600">
            <MessageSquareText className="text-white" />
          </div>
          <h3 className="text-lg font-bold">Live Support</h3>
          <p className="text-gray-400 text-xs w-44 text-center">
            Commodo qui nulla ipsum ea cupidatat sit aliquip
          </p>
          <p className="text-xs text-teal-400 flex gap-1 items-center">
            Explore
            <span>
              <ArrowRight className="text-teal-400 size-3" />
            </span>
          </p>
        </div>
        <div className="bg-gray-800 flex flex-col items-center justify-center py-8 px-4 gap-4">
          <div className="p-4 rounded-full bg-teal-600">
            <MessageSquareText className="text-white" />
          </div>
          <h3 className="text-lg font-bold">Live Support</h3>
          <p className="text-gray-400 text-xs w-44 text-center">
            Commodo qui nulla ipsum ea cupidatat sit aliquip
          </p>
          <p className="text-xs text-teal-400 flex gap-1 items-center">
            Explore
            <span>
              <ArrowRight className="text-teal-400 size-3" />
            </span>
          </p>
        </div>
        <div className="bg-gray-800 flex flex-col items-center justify-center py-8 px-4 gap-4">
          <div className="p-4 rounded-full bg-teal-600">
            <MessageSquareText className="text-white" />
          </div>
          <h3 className="text-lg font-bold">Live Support</h3>
          <p className="text-gray-400 text-xs w-44 text-center">
            Commodo qui nulla ipsum ea cupidatat sit aliquip
          </p>
          <p className="text-xs text-teal-400 flex gap-1 items-center">
            Explore
            <span>
              <ArrowRight className="text-teal-400 size-3" />
            </span>
          </p>
        </div>
      </div>
    </main>
  );
}
