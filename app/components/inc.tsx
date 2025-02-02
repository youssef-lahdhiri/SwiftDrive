import dynamic from "next/dynamic";

const ClientComponent = dynamic(() => import("./incline-bg"), { ssr: false });

export default ClientComponent;