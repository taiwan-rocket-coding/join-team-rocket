import React, { useState, useEffect } from "react";
import Loading from "./Loading.js";
import Header from "./Header";
import Batch from "./Batch";

const targetJsonFile = "./all.json";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [files, setFiles] = useState([]);

  const fetchJson = async () => {
    try {
      const response = await fetch(targetJsonFile);
      const combinedJsonFile = await response.json();

      // transform the combinedJsonFile into obj, property is batch, value is members
      const batch = {};
      for (const [key, memberData] of Object.entries(combinedJsonFile)) {
        if (!(memberData.batch in batch)) {
          batch[memberData.batch] = [memberData];
        } else {
          batch[memberData.batch].push(memberData);
        }
      }

      // transform the batch obj into array, each item is obj that created based on batch
      const memberArr = [];
      for (const [key, memberData] of Object.entries(batch)) {
        const item = {};
        item["batch"] = key;
        item["members"] = memberData;
        memberArr.push(item);
      }

      memberArr.sort((a, b) => a.batch - b.batch);
      setFiles(memberArr);
      setLoading(false);
    } catch (err) {
      alert("資料載入失敗");
    }
  };

  useEffect(() => {
    fetchJson();
  }, []);

  if (loading) {
    return (
      <div className="bg-slate-50 min-h-screen">
        <Header />
        <main className="text-center text-primary text-6xl">
          <Loading />
        </main>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen">
      <Header />
      <main>
        {files.map((file) => {
          return <Batch key={file.batch} memberData={file} />;
        })}
      </main>
    </div>
  );
};
export default App;
