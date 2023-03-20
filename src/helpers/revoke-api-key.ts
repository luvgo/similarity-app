export async function revokeApiKey({ keyId }: { keyId: string }) {
  const res = await fetch("/api/v1/api-key/revoke", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = (await res.json()) as { error?: string };
  if (data.error) throw new Error(data.error);
}
