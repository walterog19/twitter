import { useEffect, useState } from 'react';
import Tweet from '../componets/Tweet';
import API from '../api';

function TweetList() {
  const [loading, setLoading] = useState(true);
  const [list, setList] = useState([]);

  async function loadList() {
    try {
      const data = await API.getTweets();
      setList(data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    loadList();
  }, []);

  if (loading) {
    return <div>Loading ...</div>;
  }

  return (
    <div>
      {list.map((item) => {
        const { _id, text = '', user = {}, createdAt = '' } = item;
        const date = new Date(createdAt).toDateString();
        return <Tweet key={_id} content={text} user={user} date={date} />;
      })}
    </div>
  );
}

export default TweetList;
