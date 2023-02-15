import { SafeResourceUrl } from '@angular/platform-browser';
import { SafeUrl } from '../Features/photo-gallery/models/safe-resource-url-pair';

export const safeUrl:SafeResourceUrl = 'https://fastly.picsum.photos/id/1012/200/300.jpg?hmac=KU5TJQJkcv2lK_5lVNCie4evqxUOfFGp0Qsv2gQZo5k';

export const mockSafeUrl: SafeUrl = {
  id: 'image-key-1',
  value: safeUrl
}

