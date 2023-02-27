import axios from "axios";

export default async function handler(req, res) {
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  const url = `https://api.openweathermap.org/data/2.5/forecast`;
}
