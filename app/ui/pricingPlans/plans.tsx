import { CircleCheck, X } from "lucide-react";

export default function Plans() {
  return (
    <div className="py-16 px-4 flex flex-col items-center justify-center gap-12">
      <h3 className="text-4xl font-bold">Compare plans</h3>
      <div className="flex gap-4">
        <div className="flex flex-col gap-[2.2rem] px-12">
          <div className="flex flex-col gap-7 mt-[11rem]">
            <p className="text-teal-400 text-md">Key features</p>
            <p className="text-xs text-gray-400">Esse ipsum ullamco elit con</p>
            <p className="text-xs text-gray-400">Esse ipsum ullamco elit con</p>
            <p className="text-xs text-gray-400">Esse ipsum ullamco elit con</p>
            <p className="text-xs text-gray-400">Esse ipsum ullamco elit con</p>
          </div>
          <div className="flex flex-col gap-7">
            <p className="text-teal-400 text-md">Advanced support</p>
            <p className="text-xs text-gray-400">Esse ipsum ullamco elit con</p>
            <p className="text-xs text-gray-400">Esse ipsum ullamco elit con</p>
            <p className="text-xs text-gray-400">Esse ipsum ullamco elit con</p>
            <p className="text-xs text-gray-400">Esse ipsum ullamco elit con</p>
          </div>
        </div>

        <div className="flex flex-col border border-gray-600 rounded-md gap-16 px-4 py-6 items-center justify-center">
          <div className="flex flex-col items-center">
            <h3 className="text-2xl font-bold">Personal</h3>
            <p className="text-xl font-bold">
              $50
              <span className="text-sm text-gray-500 font-light">
                /user/month
              </span>
            </p>
            <button className="text-center border border-gray-600 p-2 rounded-md text-gray-400 mt-4 w-44">
              Upgrade
            </button>
          </div>
          <div className="flex flex-col gap-16">
            <div className="flex flex-col gap-6">
              <CircleCheck className="text-teal-600" />
              <X className="text-gray-400" />
              <X className="text-gray-400" />
              <X className="text-gray-400" />
            </div>
            <div className="flex flex-col gap-6">
              <CircleCheck className="text-teal-600" />
              <X className="text-gray-400" />
              <X className="text-gray-400" />
              <X className="text-gray-400" />
            </div>
          </div>
        </div>

        <div className="flex flex-col bg-gray-800 rounded-md gap-16 px-4 py-6 items-center justify-center">
          <div className="flex flex-col items-center">
            <h3 className="text-2xl font-bold text-teal-400">STARTUP</h3>
            <p className="text-xl font-bold">
              $100
              <span className="text-sm text-gray-500 font-light">
                /user/month
              </span>
            </p>
            <button className="text-center bg-teal-400 p-2 rounded-md mt-4 w-44">
              Upgrade
            </button>
          </div>
          <div className="flex flex-col gap-16">
            <div className="flex flex-col gap-6">
              <CircleCheck className="text-teal-600" />
              <CircleCheck className="text-teal-600" />
              <CircleCheck className="text-teal-600" />
              <X className="text-gray-400" />
            </div>
            <div className="flex flex-col gap-6">
              <CircleCheck className="text-teal-600" />
              <CircleCheck className="text-teal-600" />
              <X className="text-gray-400" />
              <X className="text-gray-400" />
            </div>
          </div>
        </div>

        <div className="flex flex-col border border-gray-600 rounded-md gap-16 px-4 py-6 items-center justify-center">
          <div className="flex flex-col items-center">
            <h3 className="text-2xl font-bold">ORGANIZATION</h3>
            <p className="text-xl font-bold">
              $150
              <span className="text-sm text-gray-500 font-light">
                /user/month
              </span>
            </p>
            <button className="text-center border border-gray-600 p-2 rounded-md text-gray-400 mt-4 w-44">
              Upgrade
            </button>
          </div>
          <div className="flex flex-col gap-16">
            <div className="flex flex-col gap-6">
              <CircleCheck className="text-teal-600" />
              <X className="text-gray-400" />
              <X className="text-gray-400" />
              <X className="text-gray-400" />
            </div>
            <div className="flex flex-col gap-6">
              <CircleCheck className="text-teal-600" />
              <X className="text-gray-400" />
              <X className="text-gray-400" />
              <X className="text-gray-400" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
