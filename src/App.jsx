import { Suspense } from "react";
import Countries from "./components/Countries";

const App = () => {

  const countriesPromise = fetch('https://openapi.programming-hero.com/api/all').then(res => res.json());

  return (
    <div className="container mx-auto mt-10">
      <div>
        <h1 className="text-3xl font-bold underline">This is App component</h1>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Countries countriesPromise={countriesPromise} />
      </Suspense>
    </div>
  )
};

export default App;