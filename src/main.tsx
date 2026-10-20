import React, { useEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import { BouquetScene } from "./BouquetScene";
import { AudioGarden } from "./AudioGarden";
import "@fontsource/be-vietnam-pro/vietnamese-400.css";
import "@fontsource/be-vietnam-pro/latin-400.css";
import "@fontsource/cormorant-garamond/latin-400.css";
import "@fontsource/cormorant-garamond/latin-400-italic.css";
import "@fontsource/cormorant-garamond/vietnamese-400.css";
import "@fontsource/cormorant-garamond/vietnamese-400-italic.css";
import "./style.css";
type Config = {
  recipient: string;
  sender: string;
  headline: string;
  letter: string;
  womenDay: boolean;
  womenDayMessage: string;
  musicEnabled: boolean;
  musicUrl: string;
  palette: string[];
  messages: string[];
};
function App() {
  const host = useRef<HTMLDivElement>(null),
    scene = useRef<BouquetScene | null>(null),
    audio = useRef<AudioGarden | null>(null);
  const [config, setConfig] = useState<Config | null>(null),
    [progress, setProgress] = useState(0),
    [ready, setReady] = useState(false),
    [opened, setOpened] = useState(false),
    [error, setError] = useState(""),
    [message, setMessage] = useState(""),
    [count, setCount] = useState(0),
    [secret, setSecret] = useState(false),
    [letter, setLetter] = useState(false),
    [sound, setSound] = useState(false),
    [notice, setNotice] = useState("");
  const keyboardFlower = useRef(0);
  const letterRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const abort = new AbortController();
    fetch(import.meta.env.BASE_URL + "gift-config.json", {
      signal: abort.signal,
    })
      .then((r) => {
        if (!r.ok) throw Error("Không tải được cấu hình món quà.");
        setProgress(45);
        return r.json();
      })
      .then((c: Config) => {
        if (
          !Array.isArray(c.palette) ||
          !c.palette.length ||
          !Array.isArray(c.messages) ||
          !c.messages.length
        )
          throw Error(
            "Hãy kiểm tra palette và messages trong gift-config.json.",
          );
        setConfig(c);
      })
      .catch((e) => {
        if (e.name !== "AbortError") setError(e.message);
      });
    return () => abort.abort();
  }, []);
  useEffect(() => {
    if (!config || !host.current) return;
    let timer: ReturnType<typeof setTimeout>;
    try {
      setProgress(60);
      const s = new BouquetScene(
        host.current,
        config.palette,
        (id, n) => {
          setCount(n);
          setMessage(config.messages[id % config.messages.length]);
          audio.current?.note();
          clearTimeout(timer);
          timer = setTimeout(() => setMessage(""), 6500);
        },
        () => {
          setSecret(true);
        },
      );
      scene.current = s;
      audio.current = new AudioGarden(
        config.musicUrl
          ? import.meta.env.BASE_URL + config.musicUrl.replace(/^\//, "")
          : "",
      );
      setProgress(100);
      setReady(true);
    } catch {
      setError(
        "Thiết bị chưa khởi tạo được WebGL. Hãy bật tăng tốc đồ họa hoặc thử Chrome/Safari phiên bản mới.",
      );
    }
    return () => {
      clearTimeout(timer);
      scene.current?.dispose();
      scene.current = null;
      audio.current?.dispose();
    };
  }, [config]);
  async function toggleSound() {
    try {
      await audio.current?.toggle(!sound);
      setSound(!sound);
    } catch {
      setNotice(
        "Chưa phát được âm thanh. Bạn thử bấm lại hoặc kiểm tra tệp nhạc nhé.",
      );
    }
  }
  useEffect(() => {
    if (!letter) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLetter(false);
      if (e.key === "Tab") {
        e.preventDefault();
        letterRef.current?.querySelector("button")?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [letter]);
  return (
    <main className={opened ? "experience opened" : "experience"}>
      <div className="aura aura-one" />
      <div className="aura aura-two" />
      <div className="grain" />
      <header>
        <a className="brand" href="#" aria-label="Eternal Bloom">
          ✳ <span>ETERNAL BLOOM</span>
        </a>
        <span className="edition">A UNIVERSE MADE FOR YOU</span>
        <span className="date">
          20 / 10 <span>— A LITTLE LOVE</span>
        </span>
      </header>
      <div
        className="scene"
        ref={host}
        aria-label="Bó hoa 3D tương tác. Kéo để xoay, cuộn để phóng to, nhấn đúp để đặt lại góc nhìn."
      />
      {!opened && (
        <section className="intro">
          <div className="intro-star">✧</div>
          <p className="eyebrow">MỘT MÓN QUÀ NHỎ • MỘT TÌNH YÊU LỚN</p>
          <h1>
            Một vũ trụ hoa.
            <br />
            <em>Dành riêng cho em.</em>
          </h1>
          <p className="intro-note">
            Anh có một điều nhỏ muốn gửi đến
            {config?.recipient ? " " + config.recipient : " em"}...
          </p>
          <button
            className="primary"
            disabled={!ready || !!error}
            onClick={() => {
              setOpened(true);
              scene.current?.bloom();
            }}
          >
            Khám phá món quà <span>↗</span>
          </button>
          {!ready && !error && (
            <div className="loading">
              <progress max="100" value={progress} />
              <span>Chuẩn bị vũ trụ nhỏ · {progress}%</span>
            </div>
          )}
          {error && (
            <p role="alert" className="error">
              {error}
            </p>
          )}
          <span className="intro-bottom">
            Được tạo bằng những điều dịu dàng.
          </span>
        </section>
      )}
      {opened && (
        <>
          <section className="title">
            <p className="eyebrow">
              {config?.recipient
                ? "FOR " + config.recipient.toUpperCase()
                : "FOR SOMEONE VERY SPECIAL"}
            </p>
            <h1>
              A Little Universe,
              <br />
              <em>Just for You.</em>
            </h1>
            <p>{config?.headline}</p>
          </section>
          <div className="specimen">
            <span>01—29</span>
            <i />
            <p>
              Không có hai bông hoa
              <br />
              nào hoàn toàn giống nhau.
              <br />
              Như cách em đặc biệt.
            </p>
          </div>
          <aside className="dedication">
            <span>WITH ALL MY LOVE</span>
            <p>
              {config?.sender || "Anh"} <i>♡</i>
            </p>
          </aside>
          <div className="flower-note" role="status" aria-live="polite">
            {message && (
              <div key={message}>
                <span>✧ MỘT ĐIỀU ANH MUỐN NÓI</span>
                <p>{message}</p>
                <button
                  onClick={() => setMessage("")}
                  aria-label="Đóng lời nhắn"
                >
                  ×
                </button>
              </div>
            )}
          </div>
          <footer>
            <div className="hint">
              <span>✦</span>
              <p>
                Chạm vào hoa, tìm điều dịu dàng
                <small>
                  {Math.min(count, 5)} / 5 bông hoa ·{" "}
                  {secret ? "Bí mật đã được hé lộ" : "Một bí mật đang chờ em"}
                </small>
              </p>
            </div>
            <div className="controls">
              <button
                className="accessible-flower"
                title="Khám phá một bông hoa bằng bàn phím"
                onClick={() =>
                  scene.current?.selectFlower(keyboardFlower.current++ % 29)
                }
              >
                ✧ <span>Chạm hoa</span>
              </button>
              <button
                onClick={() => {
                  scene.current?.bloom();
                  setMessage("");
                }}
                title="Cho hoa nở lần nữa"
              >
                ↻ <span>Nở lần nữa</span>
              </button>
              <button
                onClick={() => scene.current?.reset()}
                title="Đặt lại góc nhìn"
              >
                ◎ <span>Góc nhìn</span>
              </button>
              {config?.musicEnabled && (
                <button
                  onClick={toggleSound}
                  aria-pressed={sound}
                  title="Bật/tắt âm nhạc"
                >
                  {sound ? "♫" : "♪"}{" "}
                  <span>{sound ? "Tắt nhạc" : "Bật nhạc"}</span>
                </button>
              )}
              {secret && (
                <button
                  className="letter-button"
                  onClick={() => setLetter(true)}
                >
                  ♡ <span>Mở thư</span>
                </button>
              )}
            </div>
          </footer>
          <div className="orbit-help">
            KÉO ĐỂ XOAY · CUỘN / CHỤM ĐỂ ZOOM · NHẤN ĐÚP ĐỂ TRỞ VỀ
          </div>
          {secret && !letter && (
            <button className="secret" onClick={() => setLetter(true)}>
              <span>✧</span> Giữa hàng triệu vì sao,
              <br />
              <em>anh vẫn chọn em.</em>
              <small>Chạm để mở lá thư ♡</small>
            </button>
          )}
        </>
      )}
      {letter && (
        <div className="letter-backdrop" onClick={() => setLetter(false)}>
          <section
            ref={letterRef}
            className="letter"
            role="dialog"
            aria-modal="true"
            aria-label="Lá thư gửi em"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="close"
              autoFocus
              onClick={() => setLetter(false)}
            >
              Đóng ×
            </button>
            <span className="eyebrow">A LETTER, JUST FOR YOU</span>
            <h2>Gửi {config?.recipient || "em"},</h2>
            <p>{config?.letter}</p>
            {config?.womenDay && (
              <p className="occasion">{config.womenDayMessage}</p>
            )}
            <i>{config?.sender} ♡</i>
          </section>
        </div>
      )}
      {notice && (
        <button className="notice" onClick={() => setNotice("")}>
          {notice} ×
        </button>
      )}
    </main>
  );
}
createRoot(document.getElementById("root")!).render(<App />);
