import ably from "ably/promises"
import { configureAbly} from "@ably-labs/react-hooks";


export default async function handler (req, res) {

  res.setHeader('Cache-Control', 's-maxage=10'); 

  configureAbly({ key: process.env.ABLY_API_KEY, clientId: generateRandomId() });
  await ably.connection.once('connected');
  res.end()


}
