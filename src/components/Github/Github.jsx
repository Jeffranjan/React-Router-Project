import React, { useState, useEffect } from "react";

function Github() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/Jeffranjan")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);

  return (
    <div className="text-center m-4 p-4 bg-gray-600 text-white text-3xl">
      Github Followers : {data.followers}
      <img src={data.avatar_url} alt="Git Profile" width={300} />
    </div>
  );
}

export default Github;
