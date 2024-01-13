import Collection from "@/components/collection/page";


export default function Home() {
  return (
    <div className="h-full flex flex-col justify-between">
      <div className="h-full flex items-center justify-center">
      <h1 className="text-white font-bold text-center text-2xl">Collection page</h1>
      </div>
        <Collection/>
    </div>
  )
}
