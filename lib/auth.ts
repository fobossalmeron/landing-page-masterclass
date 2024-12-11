// Helper para verificar si estamos en el cliente
const isClient = typeof window !== 'undefined';

// Clave simple para la masterclass
const MASTER_KEY = 'masterclass_acueducto_2024';

export async function createToken(payload: any) {
  try {
    if (isClient) {
      localStorage.setItem('auth_token', MASTER_KEY);
      console.log('✅ Acceso concedido');
    }
    return MASTER_KEY;
  } catch (error) {
    console.error('❌ Error guardando token:', error);
    throw error;
  }
}

export async function verifyToken(): Promise<boolean> {
  try {
    if (!isClient) return false;
    
    const token = localStorage.getItem('auth_token');
    const isValid = token === MASTER_KEY;
    
    if (!isValid) {
      console.log('❌ Acceso no válido');
      return false;
    }

    return true;
  } catch (error) {
    console.error('❌ Error verificando acceso:', error);
    return false;
  }
}

export function removeToken() {
  if (isClient) {
    localStorage.removeItem('auth_token');
  }
}

export function getToken() {
  if (!isClient) return null;
  return localStorage.getItem('auth_token');
}