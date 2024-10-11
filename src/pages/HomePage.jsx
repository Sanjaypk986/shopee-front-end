import React from "react";
import Card from "../components/Card";
import "./HomePage.css";

const HomePage = () => {
  const cardsData = [
    {title: "Soft Eraser", price: "Price: $34", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvHaMc0vuicqVqIOq70Ql_W9zWTMcR0lCSYw&s" },
    {title: "Raynolds Pen", price: "Price: $12", imageUrl: "data:image/jpeg;base64,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" },
    {title: "New Eraser", price: "Price: $32", imageUrl: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKIAAACUCAMAAAAnDwKZAAAA+VBMVEX////SXl9XdJLIO0HNS0vf5/48X338///UXV////3IOT/g7v/i6v/g8P9VdZHf6v/INDrRVVfm7v8yWHf36uj09vhObo6sucfr7/Lj6O3RZ2vWXFtNb4tGaIXr8v9OdZPNR0TlqqzGKS7OQT/KQEnUl6LV2+PCzdaLnLBhfJeaq7x6j6hviKJAZoq3wMydqcDisrVjeIvtysjDXWfbjI68YG5gbojNXGPuwcHq19HXe3vfoZ713NtvcIN0boZ7bn/O2OyFbYIhTW6zwdffWFa6TFWlUlmNU2F1Xm/KPDHOzN7WtsKddIXcxtTWprXHFyfXgIviaHPIlafdtpvBAAAHfUlEQVR4nO2a63shSRjFSTfV9wtNkka2aQwiGWPssNgdw+zOhEV2//8/Zt/qC4IWpFpnn6fOh3z+5Zw6b11aLEZFRUVFRUVFRUVFRUVFRUVFFbEyt9XqbYaPxfioSfYr86GWfSgUCvVGNWqUAFXvs9krkHKVVRqZqGn26KZecAAdKdnmTdRAm+Jh3d02lDUgVrZ5+67WY+a6/hIQfMzXb6PG8sVDS5RC/mpbSvbh3TB+uM/vArr6EDUbFl+9L+QVZT9hvvAY/YC8beS3F+FLyOuoCa+VbICB3npUsh+j5Ms81guH+Fw9RDjE/b3kNWVrKBI+/vb+4ShA7GPz0j7yYMpN4zgHPR+blx2QAJhpfXo4HhAzXnij4dsm+/nLSYhw8rnc6QzFjI7OxXO/fvnlNMh69VIz3BiwuTgo1706OBB3fSxcxEeEeqYed4V9PA2yeXMBG3/rQ8a+cp9PzDpbCxmRjw0HZW5N6DCeMHhAyXBrjfjWKuNzfcxeh0XnxNM2IWNumzF+EmO2FhYiDJphh93Gc8SZv5/AGBYivrQPOH0vIfho/nEso6I8hBV0psVtL8JNH+NH+qgohXEI11Z8iArK2CcEH1/vNQzQbDLdJE8IMg4COtK5V7NWlHwymUw/EobDDmaK8QMZr538eoAR37yUAhAmFfI5w4nmCMA43q8PMCqKC5hMN0gDomH/1Yx9F7nc12BEDzBfI3z0RvzgmIxXlGaAj84iBMB0Y5QiS5jpBU7CAMbct32MWcfCdLI2kiSSJiLI+DRAJ+0dRiXvZdyc3Ekq0a4YnUOzOghxl9HL+GEiSQn1juBBzGjppwM6+v5tdcRVFH8RJmtqKqGOSN4K2qdnvNbaRy/jcX2USiTuJtcZMoQITjRvAYQBiRnBwauka2FhkpKk1Oie3EQ0iudm7IsDxtWoTtfAQkmaJK+JPeC1T5mEgYzunMGzeiIlEtKoPn4kBQibyZsBQd/9jD9Cj1Oj2jhN7KGWhIUglnVr0sQZ303y6fEHQhY6LwxvFqez7J9uTWQJMr5PpwuELn3IeHvI8B9yLMtaf6XdmqTUBhSG0EsO7HddAj3BFgLij/EV7CZqanoFrHVC+zLfs98M6FhoAaL9s5HCNbkfQ9zETtk9Aj1xLWTZp/5UhGE9KaTT4xqxt4d2SSMFaOdmMqzCUR4y/lQlNq+NsiAwOveWPnuEll2ZigD4EWpSuCb1As/HDFNjQG/J2gfszkRZVXHG6doNsYMNj/olTMgI4ON5RnJuxhZbEcWEOv17nB6TfXsvuoSg8wajvwpL/Tk4KC/0H+PkY4bgZz/U03xCRjjyuvdCHqBVXsiqKM512/5J9DMQj4bQlLVOZ/RX4TNMGnlUsS2tT/Q9G8UyrMZsqnwCHbey0NZnoqqKs65tWS2StzxYLF6Z1xLKxxeb8ydNuYNrUu1qttUh+5TNI9TZIsQ6MmtuVZPuTE2IYkW3tW4bkf2wglBxuUsoHDkg/UmjV0RVlHBN9AEfI/29tLfHw6MYudVu8gSTRhKnz7Zl9w3CeKC7RUnYx/j6RrPakNlFShTVBVjI9kL4mHuTkGfaWYy+hWx/JKupWffJZjtGCJ/EEdzNxABG4eBGs540CVWedixLiw/DAIy1E2pCVWfa3vWIh3hAs/2aWB3IWFrA1NaLsRjxnuCryrIigo/yTNiftbDfR9230JwD4LwPNekMQ+DDKi5LMC0cHwPWIxvf+VK12pDtykhUpQquSTsUPLyx9DWmVFET4OM8IGuBye0HZO3+FCbNjNVsdhDah1E+9o/GCKWKjBmD1qPAvPzi52dsL1JQExiFT90hQuF9vAUXGWH5L/ZRnAtBjBvDh1ufaWTImGVsvZUJ8cc3CPWcvc/3kQnotaBvW6jPoMhzfKTpGCH/Ws1woMBHzBg0HxlniMP4yXmr8Om5KsuJZ8uCmoT98yXk3wde6YwzfFb7XReO/tLCxieGkPkcZdxblfBa1gzrA5Zg0shTPArNMHaTXaGY6TO6PpaD9hlvN4FJI1ZxxnrvYj9Ry7hHbmAUDzD6NVmIcmqmezW5lJDB+YxOZ/Yylr2aTFPy1HRqEtJ2FyBe1zY7M91l9GrSkuUq3O4svXjxnyEO2ZWP6r6sy87JulKVxbmJ75/DSwNuMC6d9biddRnXxJzJ6gi2O6sc+igMYGQ2s95idN5pUnJioQtla2BcdhX6QnDHEl50Zn33F9hyyYRh7dREj8hCR23vklWqSJhx3RnW4hYynPyfALAVjYO+Wi98lOdezS2YNKI8M7WIarIhhNaMuDPqtIsPapo5E+Uq9JjR22FcTU5UcZW1Ox91rVSu4IcuxmasouH8/jhioYH3UKs5WavVsgkZwyhktW7EGXviV4zMsiLBnUuSoSb9J9bSW+Sfac5W/4WPsrqI22yp8z4sdITg+Oj2GJ/NRBVvdwzXDvPydIa8Iy7DaBXnEYQN9fJ0lpDR9bJm4rat4YzflYWOjH7JCdu2uVAeukiIL3ZLy2XJ7F3wXH26jOHwvRroC63+vGPx768kVFRUVFRUVFRUVFRUVFRU/zP9B+Vn3Dmb/b8ZAAAAAElFTkSuQmCC" },
    {title: "Classmate Notebook", price: "Price: $45", imageUrl: "data:image/jpeg;base64,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" },
    {title: "Cello Pen", price: "Price: $32", imageUrl: "data:image/jpeg;base64,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" },
    {title: "Pro Pen", price: "Price: $56", imageUrl: "data:image/png;base64,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" },
    {title: "Apsara Book", price: "Price: $32", imageUrl: "data:image/jpeg;base64,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" },
    {title: "Fine Note", price: "Price: $56", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5rbcPQaHYpifmj69yWlgGlLXuIF5ZdEb2Xzb9Wpdh0aZbrLT4yRGCKzw&s" },
    {title: "Staedtler Eraser", price: "Price: $43", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1_YqJ8M6-C42Vhw50D5piKxteCDwQW8OqxOHXMY-BR7kmWVYO054JuZk&s" },
    {title: "Mono Book", price: "Price: $67", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo10kZl--jGmaqYFnJDh7BDETIA3fpI2i8ylAKp-luuzyOij897r7sNDA&s" },
  ];

  return (
    <div className="home-page-container">
      <div className="grid-container">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            price={card.price}
            imageUrl={card.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
