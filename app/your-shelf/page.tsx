import Button from "@/components/Button";

export default function YourShelf() {
  return (
    <main className="my-auto py-6">
      <h1 className="pb-6 text-center text-3xl">Log to or create your shelf</h1>
      <div className="flex flex-col items-center justify-center md:flex-row md:items-stretch">
        <form className="flex flex-col md:border-r md:border-lego-red md:pr-4">
          <label>email</label>
          <input className="border"></input>
          <label>password</label>
          <input className="border"></input>
          <Button className="mt-auto bg-lego-red py-2">
            Log to your shelf
          </Button>
        </form>
        <form className="flex flex-col md:border-l md:border-lego-red md:pl-4">
          <label>email</label>
          <input className="border"></input>
          <label>password</label>
          <input className="border"></input>
          <label>repeat password</label>
          <input className="border"></input>
          <Button className="mt-2 py-2">Create your shelf</Button>
        </form>
      </div>
    </main>
  );
}
