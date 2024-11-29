'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { createUser } from '../../components/actions';

export default function WelcomePage() {
  const [nickname, setNickname] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      router.push('/'); // 이미 사용자 정보가 있으면 메인 페이지로 리디렉트
    }
  }, [router]);

  const handleSubmit = async () => {
    if (!nickname.trim()) {
      alert('닉네임을 입력해주세요.');
      return;
    }

    try {
      const user = await createUser(nickname);
      localStorage.setItem('user', JSON.stringify(user));
      setIsSubmitted(true);
      router.push('/'); // 메인 페이지로 이동
    } catch (error) {
      console.error('Error creating user:', error);
      alert('사용자 생성 중 문제가 발생했습니다.');
    }
  };

  if (isSubmitted) {
    return <div className="text-center mt-10">메인 화면으로 이동 중...</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">닉네임을 입력해주세요</h1>
      <div className="flex flex-col space-y-4">
        <input
          type="text"
          placeholder="닉네임"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          disabled={isSubmitted}
        />
        <button
          onClick={handleSubmit}
          className={`px-6 py-3 font-semibold rounded-lg shadow-md text-white ${
            isSubmitted
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-blue-500 hover:bg-blue-600'
          }`}
          disabled={isSubmitted}
        >
          {isSubmitted ? '생성 중...' : '완료'}
        </button>
      </div>
    </div>
  );
}
