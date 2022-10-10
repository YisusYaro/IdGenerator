import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { getUUID } from "../modules/resources/interface/controller";
import { getULID } from "../modules/resources/interface/controller";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const [uuid, setUUID] = useState("");
  const [ulid, setULID] = useState("");

  useEffect(() => {
    handleGetUUID();
    handleGetULID();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleGetUUID = async () => {
    const { uuid } = await getUUID();
    setUUID(uuid);
  };

  const handleGetULID = async () => {
    const { ulid } = await getULID();
    setULID(ulid);
  };

  return (
    <div className={styles.container}>
      <h1>ID Generator</h1>
      <div className={styles.wrapper}>
        <div className={styles.box}>
          <button className={styles.button} onClick={handleGetUUID}>Generate UUID</button>
          <div className={styles.result}>{uuid}</div>
        </div>
        <div className={styles.box}>
          <button className={styles.button} onClick={handleGetULID}>Generate ULID</button>
          <div className={styles.result}>{ulid}</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
