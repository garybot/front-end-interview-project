import { Header } from "../../components";
import { Footer } from "../../components";
import { Aisle } from "../../components";
import { Group } from "../../components";

export async function getStaticProps() {

  const req = await fetch(`https://api.foxtrotchicago.com/v5/inventory/aisles/224/items?store_id=6`);
  const data = await req.json();

    return {
      props: { aisle: data.aisle }
    }
  }

export default function Discover({ aisle }) {
  return(
    <>
    <Header/>
    <main>
      <Aisle />
      <section>
        {aisle.groups.map(group => (
          <Group key={group.id} group={group}/>
        ))}
      </section>
    </main>
    <Footer/>
    </>
  )
}
