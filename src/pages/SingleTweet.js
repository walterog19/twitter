import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Tweet from '../componets/Tweet';
import API from '../api';

export default function SingleTweet() {
  const [tweet, setTweet] = useState(null);
  const params = useParams();
  const { id = null } = params;

  async function loadTweet({ id }) {
    const data = await API.getTweet({ id });
    const { _id, text = '', user = {}, createdAt = '' } = data;
    const date = new Date(createdAt).toDateString();
    setTweet({
      _id,
      text,
      user,
      date,
    });
  }

  useEffect(() => {
    loadTweet({ id });
  }, [id]);

  return <>{tweet && <Tweet {...tweet} />}</>;
}
