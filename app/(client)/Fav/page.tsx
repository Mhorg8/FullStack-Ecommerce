"use client";
import EmptyCart from "@/components/cart/EmptyCart";
import Container from "@/components/Container";
import WhishListItem from "@/components/whishlist/WhishListItem";
import { userWhishListStore } from "@/store";

const FavoritesPage = () => {
  const { getFavoriteItems } = userWhishListStore();
  const items = getFavoriteItems();

  if (items.length === 0) {
    return (
      <div>
        <EmptyCart />
      </div>
    );
  } else {
    return (
      <Container>
        <div className="py-5">
          <h2 className="text-3xl md:text-4xl font-bold tracking-wide">
            Wishlist
          </h2>
        </div>

        <div className="border border-darkColor rounded-lg space-y-3">
          {items.map((item) => (
            <WhishListItem product={item} key={item._id} />
          ))}
        </div>
      </Container>
    );
  }
};

export default FavoritesPage;
