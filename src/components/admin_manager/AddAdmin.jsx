import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../firebase/firebase";

function AddAdmin() {
  const [admins, setAdmins] = useState([]);

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
    <div className="flex flex-col h-screen w-full">
      {admins.map((admin) => (
        <div className="mb-2 mt-2 flex flex-row border border-solid p-3 w-full border-black justify-between">
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
              }}
              className="w-[100px] py-2 bg-[#00dfad] font-semibold rounded-lg"
            >
              Add
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AddAdmin;
