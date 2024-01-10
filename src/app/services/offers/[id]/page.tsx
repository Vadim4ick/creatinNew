import { gql } from "@/graphql/client";
import { PageOffer } from "@/page/PageOffer";

const OffersPage = async ({ params }: { params: { id: string } }) => {
  const id = params.id;

  const { offers } = await gql.GetOffersName();

  return <PageOffer offersName={offers.data} id={id} />;
};

export default OffersPage;
