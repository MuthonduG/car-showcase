import Brands from "./Brands";
import Carslider from "./Carslider";


export default function Cars() {
  return (
    <section className="h-screen flex items-center" id="cars">
      <div className="container mx-auto">
        <Brands/>
        <Carslider/>
      </div>
    </section>
  )
}
