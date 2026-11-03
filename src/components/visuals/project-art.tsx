import Image from "next/image";
import {
  CircuitBoard,
  CloudUpload,
  Container,
  Fan,
  Lightbulb,
  ShoppingBag,
  Video,
  Wifi,
} from "lucide-react";

export function ProjectArt({ title }: { title: string }) {
  if (title === "Control Nest V2")
    return (
      <div className="project-art nest-art" aria-hidden="true">
        <div className="art-grid" />
        <div className="nest-controller">
          <CircuitBoard size={40} strokeWidth={1.1} />
          <span />
          <span />
          <span />
        </div>
        <div className="app-phone nest-phone">
          <div className="phone-speaker" />
          <div className="phone-brand">
            <Image
              src="/images/control-nest-v2.png"
              alt=""
              width={25}
              height={25}
            />
            <span>Control Nest</span>
          </div>
          <p className="phone-section-title">My house</p>
          <div className="phone-room">
            Living room
            <Wifi size={10} />
          </div>
          <div className="phone-device">
            <Lightbulb size={16} strokeWidth={1.5} />
            <span>Lights</span>
            <span className="phone-switch" />
          </div>
          <div className="phone-device">
            <Fan size={16} strokeWidth={1.5} />
            <span>Fan</span>
            <span className="phone-switch switch-off" />
          </div>
          <div className="phone-schedule">
            <span>Schedules</span>
            <div />
            <div />
          </div>
        </div>
        <div className="device-tile">
          <Wifi size={22} strokeWidth={1.5} />
          <span>Raspberry Pi controller</span>
        </div>
      </div>
    );
  if (title === "Vaultify")
    return (
      <div className="project-art vaultify-art" aria-hidden="true">
        <div className="art-grid" />
        <div className="ledger-sheet">
          <div />
          <div />
          <div />
          <div />
        </div>
        <div className="app-phone vaultify-phone">
          <div className="phone-speaker" />
          <div className="phone-brand">
            <Image src="/images/vaultify.png" alt="" width={25} height={25} />
            <span>Vaultify</span>
          </div>
          <p className="phone-section-title">Accounts</p>
          <div className="ledger-account">
            <span className="account-symbol">P</span>
            <div>
              <strong>Personal</strong>
              <span>Private ledger</span>
            </div>
          </div>
          <div className="ledger-account">
            <span className="account-symbol shared-symbol">G</span>
            <div>
              <strong>Household</strong>
              <span>Shared account</span>
            </div>
          </div>
          <div className="ledger-directions">
            <span>Paid ↗</span>
            <span>Received ↙</span>
          </div>
        </div>
        <div className="ledger-tile">
          <span className="ledger-symbol">₹</span>
          <span>Personal &amp; shared ledgers</span>
        </div>
      </div>
    );
  if (title === "NMT Deploy")
    return (
      <div className="project-art deploy-art" aria-hidden="true">
        <div className="art-grid" />
        <div className="deploy-cube cube-back">
          <Container size={30} strokeWidth={1.3} />
        </div>
        <div className="deploy-window">
          <div className="window-chrome">
            <span />
            <span />
            <span />
            <span className="window-address">deploy.nmtsolutions.in</span>
          </div>
          <Image
            src="/images/nmt-deploy.png"
            alt=""
            width={1117}
            height={902}
            sizes="(max-width: 700px) 90vw, 45vw"
          />
        </div>
        <div className="deployment-label">
          <CloudUpload size={17} />
          <span>Docker deployments</span>
        </div>
        <div className="deploy-cube cube-front">
          <Container size={24} strokeWidth={1.3} />
        </div>
      </div>
    );
  if (title === "NMT Store")
    return (
      <div className="project-art store-art" aria-hidden="true">
        <div className="art-grid" />
        <div className="store-disc" />
        <div className="store-window">
          <div className="mini-store-brand">
            <ShoppingBag size={14} />
            <span>NMT Store</span>
            <span className="mini-store-nav">Discover</span>
          </div>
          <Image
            src="/images/nmt-store.png"
            alt=""
            width={1200}
            height={800}
            sizes="(max-width: 700px) 85vw, 30vw"
          />
        </div>
        <div className="shopping-tile">
          <ShoppingBag size={32} strokeWidth={1.2} />
        </div>
      </div>
    );
  if (title === "Meet Flow")
    return (
      <div className="project-art meet-art" aria-hidden="true">
        <div className="art-grid" />
        <div className="meeting-window">
          <div className="meeting-bar">
            <Video size={13} />
            <span>meet flow</span>
            <span className="meeting-dot" />
          </div>
          <div className="meeting-people">
            <span>TK</span>
            <span>AS</span>
            <span>RJ</span>
            <span>MK</span>
          </div>
          <div className="meeting-controls">
            <span />
            <span />
            <span />
            <span className="end-call" />
          </div>
        </div>
        <div className="connection-tile">
          <Wifi size={23} strokeWidth={1.5} />
          <span>Real-time connection</span>
        </div>
      </div>
    );
  return (
    <div className="project-art autopi-art" aria-hidden="true">
      <div className="art-grid" />
      <div className="isometric-board">
        <div className="board-chip">
          <CircuitBoard size={44} strokeWidth={1} />
        </div>
        <div className="board-ports">
          <span />
          <span />
          <span />
        </div>
        <div className="board-pins">
          {Array.from({ length: 9 }, (_, index) => (
            <span key={index} />
          ))}
        </div>
        <div className="board-track track-one" />
        <div className="board-track track-two" />
      </div>
      <div className="device-tile">
        <Wifi size={22} strokeWidth={1.5} />
        <span>Raspberry Pi</span>
      </div>
    </div>
  );
}
