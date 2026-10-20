import { useEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import { BouquetScene } from "./BouquetScene";
import "./style.css";

function App() {
  const host = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const abort = new AbortController();
    let garden: BouquetScene | undefined;
    let flowerIndex = 0;
    const keyboard = (event: KeyboardEvent) => {
      if (!garden) return;
      if (event.key === "Home") garden.reset();
      if (event.key.toLowerCase() === "r") garden.bloom();
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        garden.selectFlower(flowerIndex++ % 29);
      }
    };
    async function start() {
      try {
        const response = await fetch(import.meta.env.BASE_URL + "gift-config.json", {
          signal: abort.signal,
        });
        if (!response.ok) throw new Error("Không tải được cấu hình màu hoa.");
        const config = await response.json();
        if (abort.signal.aborted || !host.current) return;
        if (!Array.isArray(config.palette) || !config.palette.length ||
            !config.palette.every((color: unknown) => typeof color === "string" && /^#[0-9a-f]{6}$/i.test(color))) {
          throw new Error("Hãy kiểm tra các mã màu trong gift-config.json.");
        }
        garden = new BouquetScene(host.current, config.palette, () => {}, () => {}, true);
        garden.bloom();
        setReady(true);
      } catch (reason) {
        if (abort.signal.aborted) return;
        const message = reason instanceof Error ? reason.message : "";
        setError(message.includes("cấu hình") || message.includes("mã màu") ? message :
          "Không mở được hoa 3D. Bạn thử bật tăng tốc đồ họa hoặc mở bằng Chrome/Safari mới nhé.");
      }
    }
    const element = host.current;
    element?.addEventListener("keydown", keyboard);
    void start();
    return () => {
      abort.abort();
      element?.removeEventListener("keydown", keyboard);
      garden?.dispose();
    };
  }, []);

  return (
    <main className="flower-view">
      <div className="flower-canvas" ref={host} tabIndex={0} role="region"
        aria-label="Bó hoa 3D. Kéo hoặc vuốt để xoay, cuộn hoặc chụm để zoom. Nhấn đúp hoặc Home để đặt lại góc nhìn. Phím R để hoa nở lại, Enter để chọn hoa." />
      {!ready && !error && <div className="loading" role="status" aria-label="Đang chuẩn bị bó hoa"><span /></div>}
      {error && <p className="error" role="alert">{error}</p>}
    </main>
  );
}

createRoot(document.getElementById("root")!).render(<App />);
