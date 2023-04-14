import React, { useEffect, useState } from 'react'
import ShowComment from './ShowComment'
import { db } from '../../lib/firebase';
import { collection, onSnapshot, query, where } from "firebase/firestore";
import dayjs from "dayjs";

type Todo = {
    todoId: string
  }

type Comment = {
    todoId: string
    name: string;
    content: string;
    created_at: string;
  }

const ShowAllComments: React.FC<Todo> = ({todoId}) => {
    const [comments, setComments] = useState<Comment[]>([]);
    useEffect(() => {
        if (!todoId) {
            setComments([]);
            return;
          }
        const q = query(collection(db, "comments"), where("todoId", "==", todoId));
        onSnapshot(q, (snapshot) => {
            setComments(
              snapshot.docs.map((doc) => {
                return {
                    todoId: todoId,
                    name: doc.data().name as string,
                    content: doc.data().content as string,
                    created_at: dayjs(doc.data().created_at.toDate()).format('YYYY-MM-DD HH:mm')
                }
              })
            );
            
          });
    },[todoId])
    return (
        <>
            <div className="mt-2 ml-4 max-h-[464px]">
                {comments.sort((a: Comment, b: Comment) =>new Date(a.created_at).getTime() - new Date(b.created_at).getTime()).map((comment: Comment) => {
                return (
                    <ShowComment
                    key={comment.name}
                    name={comment.name}
                    date={comment.created_at}
                    content={comment.content}
                    />
                )}
                )}
            </div>
        </>
    )
}

export default ShowAllComments