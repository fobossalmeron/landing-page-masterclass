import { SignJWT, jwtVerify } from 'jose';

const secret = new TextEncoder().encode(
  process.env.NEXT_PUBLIC_JWT_SECRET || 'default-secret-key'
);

export async function createToken(payload: any) {
  const token = await new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('7d')
    .sign(secret);
  
  localStorage.setItem('auth_token', token);
  return token;
}

export async function verifyToken(): Promise<boolean> {
  try {
    const token = localStorage.getItem('auth_token');
    if (!token) return false;

    const { payload } = await jwtVerify(token, secret);
    return !!payload;
  } catch {
    return false;
  }
}

export function removeToken() {
  localStorage.removeItem('auth_token');
}

export async function getToken() {
  return localStorage.getItem('auth_token');
}