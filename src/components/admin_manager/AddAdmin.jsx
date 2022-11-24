import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  updateDoc,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { db } from "../firebase/firebase";

function AddAdmin() {
  const [admins, setAdmins] = useState([]);
  const [loading, setLoading] = useState(true);
  const { logOut } = useAuth();

  const handleClickLogOut = async () => {
    await logOut().catch((error) => alert(error));
  };

  const handleClickAdd = async (email) => {
    const userRef = doc(db, "Users", email);

    // To update the role
    await updateDoc(userRef, {
      role: "admin",
    });

    // To delete the admin from the list of requesting admins
    const adminRef = doc(db, "Requesting Admins", email);
    await deleteDoc(adminRef);

    alert("Admins sucessfully added");
  };

  useEffect(() => {
    //Use to listen to the database and get the new
    const unsub = onSnapshot(
      collection(db, "Requesting Admins"),
      (snapshot) => {
        const admin = [];
        snapshot.forEach((doc) => {
          admin.push(doc.data());
        });
        setAdmins(admin);
      }
    );
    setLoading(false);
    return () => unsub();
  }, []);

  return loading ? (
    <h1>Loading pa po....</h1>
  ) : (
    <div className="flex items-center flex-col h-screen w-full bg-[#ebf2f3] overflow-auto">
      {admins.map((admin) => (
        <div
          key={admin.adminEmail}
          className="max-w-[800px] m-2 flex flex-row border border-solid p-3 w-full border-black justify-between"
        >
          <div>{admin.adminName}</div>
          <div>{admin.adminEmail}</div>
          <div className="flex gap-3">
            <button
              onClick={(e) => {
                e.preventDefault();
              }}
              className="w-[100px] py-2 bg-[#00dfad] font-semibold rounded-lg"
            >
              Info
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                handleClickAdd(admin.adminEmail);
              }}
              className="w-[100px] py-2 bg-[#00dfad] font-semibold rounded-lg"
            >
              Add
            </button>
          </div>
        </div>
      ))}
      <div className="text-center">
        <button
          onClick={(e) => {
            e.preventDefault();
            handleClickLogOut();
          }}
          className="w-[200px] my-5 py-2 border border-solid border-black text-[#00dfad] font-semibold rounded-lg"
        >
          Log Out
        </button>
      </div>
    </div>
  );
}

export default AddAdmin;
