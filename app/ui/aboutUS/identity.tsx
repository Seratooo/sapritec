export default function Identity() {
  return (
    <div className="flex items-center justify-around px-4 py-8">
      <div className="flex flex-col gap-1 w-[30rem]">
        <div className="flex gap-4">
          <div className="bg-teal-600 w-8 h-8 rounded-sm"></div>
          <p className="text-md font-bold">Vision</p>
        </div>
        <p className="pl-12">
          Ex nisi in in minim dolore ad nostrud cillum. Fugiat veniam
          adipisicing nulla amet cupidatat sunt dolore nisi ullamco exercitation
          exercitation.Mollit occaecat tempo
        </p>
      </div>
      <div className="flex flex-col gap-1 w-[30rem]">
        <div className="flex gap-4">
          <div className="bg-blue-600 w-8 h-8 rounded-sm"></div>
          <p className="text-md font-bold">Mission</p>
        </div>
        <p className="pl-12">
          Ex nisi in in minim dolore ad nostrud cillum. Fugiat veniam
          adipisicing nulla amet cupidatat sunt dolore nisi ullamco exercitation
          exercitation.Mollit occaecat tempo
        </p>
      </div>
    </div>
  );
}
