import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { db } from "../firebase/firebase";

function AddAdmin() {
  const [admins, setAdmins] = useState([]);
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

    //To delete the admin from the admins array to rerender display without the added admin
    setAdmins(admins.filter((admin) => admin.adminEmail !== email));

    alert("Admins sucessfully added");
  };

  useEffect(() => {
    //To get and store the list of hospital from our database to the variables.
    (async () => {
      const querySnapshot = await getDocs(collection(db, "Requesting Admins"));
      const admins = [];
      querySnapshot.forEach((doc) => {
        const { adminName, adminEmail, street, city, province, contactNumber } =
          doc.data();
        admins.push({
          id: doc.id,
          adminName,
          adminEmail,
          street,
          city,
          province,
          contactNumber,
        });
      });
      setAdmins(admins);
    })();
  }, []);

  return (
    <div className="flex items-center flex-col h-screen w-full bg-[#ebf2f3] overflow-auto">
      {admins.map((admin) => (
        <div
          key={admin.id}
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
