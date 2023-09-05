import { Song } from "@/types";

import { useSupabaseClient } from "@supabase/auth-helpers-react";

const useLoadImage = (song: Song) => {
	const supaseBaseClient = useSupabaseClient();

	if (!song) {
		return null;
	}

	const { data: ImageData } = supaseBaseClient
		.storage
		.from('images')
		.getPublicUrl(song.image_path);

	return ImageData.publicUrl;
}

export default useLoadImage;