import { CircleCheck, X } from "lucide-react";

export default function Pricing() {
  return (
    <main className="max-w-[1440px] m-auto flex flex-col justify-center items-center space-y-4 py-16 px-4">
      <h1 className="text-4xl font-bold">Pricing</h1>
      <p className="text-sm text-gray-400 w-[30rem] text-center">
        Officia exercitation quis voluptate elit consequat nostrud
      </p>
      <div className="flex gap-4">
        <button className="bg-teal-600 text-md px-4 py-2 rounded-3xl">
          Monthly
        </button>
        <button className="text-md px-4 py-2 rounded-3xl text-teal-400">
          Yearly
        </button>
      </div>

      <div className="flex gap-4 items-center">
        <div className="bg-gray-900 w-[19.6rem] h-[26rem] rounded-md">
          <div className="bg-blue-600 h-3"></div>
          <div className="py-14 px-6 flex flex-col h-full">
            <h3 className="text-2xl">Personal</h3>
            <p className="text-sm text-gray-400 mt-2">
              Perfect for side projects
            </p>
            <p className="text-2xl font-bold mt-4">
              $50 <span className="text-sm text-gray-500">/month</span>
            </p>
            <div className="flex gap-1 mt-4">
              <CircleCheck className="text-blue-600" />
              <p className="text-gray-400">Up to 5 users</p>
            </div>
            <div className="flex gap-1 mt-2">
              <CircleCheck className="text-blue-600" />
              <p className="text-gray-400">Collaboration features</p>
            </div>
            <div className="flex gap-1 mt-2">
              <X className="text-gray-400" />
              <p className="text-gray-400">Smart analytics</p>
            </div>
            <div className="flex gap-1 mt-2">
              <X className="text-gray-400" />
              <p className="text-gray-400">30-day free trial</p>
            </div>
            <button className="text-center border border-gray-600 p-2 rounded-md text-gray-400 mt-8">
              Upgrade
            </button>
          </div>
        </div>

        <div className="bg-gray-900 w-[19.6rem] h-[29rem] rounded-md">
          <div className="bg-teal-600 p-4 text-center">Popular</div>
          <div className="py-14 px-6 flex flex-col h-full">
            <h3 className="text-2xl">Start Up</h3>
            <p className="text-sm text-gray-400 mt-2">
              Perfect for side projects
            </p>
            <p className="text-2xl font-bold mt-4">
              $100 <span className="text-sm text-gray-500">/team/month</span>
            </p>
            <div className="flex gap-1 mt-4">
              <CircleCheck className="text-teal-600" />
              <p className="text-gray-400">Up to 5 users</p>
            </div>
            <div className="flex gap-1 mt-2">
              <CircleCheck className="text-teal-600" />
              <p className="text-gray-400">Collaboration features</p>
            </div>
            <div className="flex gap-1 mt-2">
              <CircleCheck className="text-teal-600" />
              <p className="text-gray-400">Smart analytics</p>
            </div>
            <div className="flex gap-1 mt-2">
              <CircleCheck className="text-teal-600" />
              <p className="text-gray-400">30-day free trial</p>
            </div>
            <button className="text-center p-2 rounded-md mt-8 bg-teal-600">
              Upgrade
            </button>
          </div>
        </div>

        <div className="bg-gray-900 w-[19.6rem] h-[26rem] rounded-md">
          <div className="bg-fuchsia-600 h-3"></div>
          <div className="py-14 px-6 flex flex-col h-full">
            <h3 className="text-2xl">Organization</h3>
            <p className="text-sm text-gray-400 mt-2">
              Perfect for side projects
            </p>
            <p className="text-2xl font-bold mt-4">
              $150 <span className="text-sm text-gray-500">/user/month</span>
            </p>
            <div className="flex gap-1 mt-4">
              <CircleCheck className="text-fuchsia-600" />
              <p className="text-gray-400">Up to 5 users</p>
            </div>
            <div className="flex gap-1 mt-2">
              <CircleCheck className="text-fuchsia-600" />
              <p className="text-gray-400">Collaboration features</p>
            </div>
            <div className="flex gap-1 mt-2">
              <CircleCheck className="text-fuchsia-600" />
              <p className="text-gray-400">Smart analytics</p>
            </div>
            <div className="flex gap-1 mt-2">
              <CircleCheck className="text-fuchsia-600" />
              <p className="text-gray-400">30-day free trial</p>
            </div>
            <button className="text-center border border-gray-600 p-2 rounded-md text-gray-400 mt-8">
              Upgrade
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
