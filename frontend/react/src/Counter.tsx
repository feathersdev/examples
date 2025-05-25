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

  return <div>
    Our community counter is: <strong>{counter}</strong>
    <div>
      <button onClick={incrementCounter}>Increment</button>
    </div>
  </div>
}
