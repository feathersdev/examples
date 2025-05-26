import { useEffect, useState } from "react";
import { AppDocumentHandle } from "./automerge";

export default function Counter({ handle }: { handle: AppDocumentHandle }) {
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    handle.on("change", ({ doc }) => {
      setCounter(doc.counter || 0)
    })
  }, [handle])

  const incrementCounter = () => {
    handle.change((doc) => {
      doc.counter = (doc.counter || 0) + 1
    })
  }

  return <div className="card bg-base-300 mx-auto rounded-4xl">
    <div className="card-body">
      <h2 className="text-2xl">Community Counter</h2>
      <p className="text-sm">Number of times clicked by everybody</p>
      <strong className="text-3xl pt-2 pb-3">{counter}</strong>
      <button className="btn btn-primary" onClick={incrementCounter}>
        Increment
      </button>
    </div>
  </div>
}
