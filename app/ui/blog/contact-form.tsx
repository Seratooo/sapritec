import Image from "next/image";

export default function ContactForm() {
  return (
    <div className="flex gap-20 px-4 py-16 items-center justify-center">
      <div className="flex flex-col gap-4">
        <h3 className="text-4xl font-bold">Need support?</h3>
        <p className="text-xs text-gray-400">
          Fill in the form to get in touch.
        </p>
        <Image
          src={"/assets/contact-form/Image 69.png"}
          width={450}
          height={660}
          alt="Contact form"
        />
      </div>
      <div className="flex flex-col gap-8">
        <div className="flex gap-4">
          <label htmlFor="" className="flex flex-col text-sm">
            First Name
            <input
              type="text"
              name=""
              id=""
              placeholder="Name"
              className="text-sm text-gray-400 p-3 rounded-md border bg-black border-gray-600"
            />
          </label>
          <label htmlFor="" className="flex flex-col text-sm">
            Last Name
            <input
              type="text"
              name=""
              id=""
              placeholder="Name"
              className="text-sm text-gray-400 p-3 rounded-md border bg-black border-gray-600"
            />
          </label>
        </div>
        <div>
          <label htmlFor="" className="flex flex-col text-sm">
            Email
            <input
              type="email"
              name=""
              id=""
              placeholder="Email"
              className="text-sm text-gray-400 p-3 rounded-md border bg-black border-gray-600"
            />
          </label>
        </div>
        <div>
          <label htmlFor="" className="flex flex-col text-sm">
            Comapny Name
            <input
              type="text"
              name=""
              id=""
              placeholder="Name"
              className="text-sm text-gray-400 p-3 rounded-md border bg-black border-gray-600"
            />
          </label>
        </div>
        <div>
          <label htmlFor="" className="flex flex-col text-sm">
            Company size
            <select
              name=""
              id=""
              className="text-sm text-gray-400 p-3 rounded-md border bg-black border-gray-600"
            >
              <option value="">xx</option>
            </select>
          </label>
        </div>
        <div>
          <label htmlFor="" className="flex flex-col text-sm">
            Which topic best fit your needs?
            <select
              name=""
              id=""
              className="text-sm text-gray-400 p-3 rounded-md border bg-black border-gray-600"
            >
              <option value="">xx</option>
            </select>
          </label>
        </div>
        <div>
          <label htmlFor="" className="flex flex-col text-sm">
            How can we help?
            <textarea
              name=""
              id=""
              cols={30}
              rows={5}
              className="text-sm text-gray-400 p-3 rounded-md border bg-black border-gray-600"
            ></textarea>
          </label>
        </div>
        <button className="bg-teal-600 p-3 rounded-md">Submit</button>
      </div>
    </div>
  );
}
