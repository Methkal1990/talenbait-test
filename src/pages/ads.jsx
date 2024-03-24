import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import { useGetAds } from "../context/ads";
import Ad from "../components/Ad";

export default function Ads() {
  const { id } = useParams();
  const productAds = useGetAds(id);

  const renderAds = () => (
    <ul className="ads__list">
      {productAds.map((ad) => (
        <Ad key={ad.id} ad={ad} />
      ))}
    </ul>
  );

  const renderNoAds = () => <h2 className="ads__none">No ads found</h2>;

  return (
    <div className="ads">
      <h1 className="ads__title">Current Ads</h1>
      <Link to={`/ads/create/${id}`} className="ads__create">
        Create Ad
      </Link>
      {productAds.length !== 0 ? renderAds() : renderNoAds()}
    </div>
  );
}
