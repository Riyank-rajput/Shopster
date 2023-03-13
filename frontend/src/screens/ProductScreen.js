/*Function to get the slug from the URL and show it on the screen
  To do that we need to use a hook params from react-router-dom*/

import { useParams } from 'react-router-dom';

function ProductScreen() {
  const params = useParams();
  const { slug } = params;
  return (
    <div>
      <h1>{slug}</h1>
    </div>
  );
}
export default ProductScreen;
