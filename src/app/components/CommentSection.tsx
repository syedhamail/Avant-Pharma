"use client";
import { useEffect, useState } from "react";

type Comment = {
  id: number;
  name: string;
  text: string;
  userId: string;
};

export default function CommentSection() {
  const [comments, setComments] = useState<Comment[]>([]);
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [userId, setUserId] = useState("");

  // Generate / get userId + fetch comments
  useEffect(() => {
    let storedId = localStorage.getItem("commentUserId");

    if (!storedId) {
      storedId = crypto.randomUUID();
      localStorage.setItem("commentUserId", storedId);
    }

    setUserId(storedId);

    fetch("/api/comments")
      .then((res) => res.json())
      .then((data) => setComments(data));
  }, []);

  // Submit comment
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("/api/comments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        text,
        userId,
      }),
    });

    const newComment = await res.json();
    setComments((prev) => [...prev, newComment]);
    setName("");
    setText("");
    setLoading(false);
  };

  // Delete comment (only owner)
  const handleDelete = async (id: number) => {
    const res = await fetch(
      `/api/comments?id=${id}&userId=${userId}`,
      { method: "DELETE" }
    );

    if (res.ok) {
      setComments((prev) => prev.filter((c) => c.id !== id));
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Comments</h2>

      {/* Comment Form */}
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="border p-2 w-full mb-2"
        />

        <textarea
          placeholder="Your comment"
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
          className="border p-2 w-full mb-2"
        />

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          {loading ? "Submitting..." : "Post Comment"}
        </button>
      </form>

      {/* Comments List */}
      <div>
        {comments.map((comment) => (
          <div
            key={comment.id}
            className="p-3 border-b flex justify-between items-start"
          >
            <div>
              <p className="font-bold">{comment.name}</p>
              <p className="text-gray-700">{comment.text}</p>
            </div>

            {/* DELETE ONLY FOR OWNER */}
            {comment.userId === userId && (
              <button
                onClick={() => handleDelete(comment.id)}
                className="text-red-500 text-sm"
              >
                Delete
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
