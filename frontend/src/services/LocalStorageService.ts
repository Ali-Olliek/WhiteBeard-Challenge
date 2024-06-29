export default class LocalStorageService {
  save(articleId: number) {
    const storedItems = localStorage.getItem('articles');
    let items: number[] = [];

    if (storedItems !== null) {
      items = JSON.parse(storedItems);
    }

    if (items.includes(articleId)) {
      return;
    }

    items.push(articleId);

    localStorage.setItem('articles', JSON.stringify(items));
  }

  isLiked(articleId: number | null) {
    if (!articleId) return false;
    const storedItems = localStorage.getItem('articles');
    let items: number[] = [];

    if (storedItems !== null) {
      items = JSON.parse(storedItems);
    }

    if (items.includes(articleId)) {
      return true;
    }

    return false;
  }
}
