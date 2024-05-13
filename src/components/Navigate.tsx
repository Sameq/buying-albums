import { useNavigate } from "react-router-dom";

interface NavigateUrls {
  url: string;
}

export default function Navigate({ url }: NavigateUrls): () => void {
  const navigate = useNavigate();
  return () => {
    navigate(url);
  };
}
