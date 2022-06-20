import { Component, OnInit } from '@angular/core';
import { Plant } from 'src/app/shared/models/plant';

@Component({
  selector: 'app-plantlist',
  templateUrl: './plantlist.component.html',
  styleUrls: ['./plantlist.component.scss']
})
export class PlantlistComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  get plants(): Plant[]{
    return [
      { plantid: 0, name: "Monstrera", infotext: "Text über die Pflanze Monstrera, muss gegossen werden.", wateramount: 2, sunamount: 3, imageUrl: "https://static.blume2000.de/pictures/20004000/022_Water-Plant-Monstera-Monkey.jpg?1643313767" },
      { plantid: 1, name: "Roter Klee", infotext: "Text über die Pflanze Klee, muss nicht so viel gegossen werden. Kann im Baumarkt gekauft werden", wateramount: 1, sunamount: 5, imageUrl: "https://www.mein-schoener-garten.de/sites/default/files/roter-gluecksklee-oxalis-triangularis-14397-blumenbuero.jpg" },
      { plantid: 2, name: "Duftgeranie", infotext: "Text über die Pflanze Duftgeranie, muss nicht so viel gegossen werden. Kann im Baumarkt gekauft werden", wateramount: 1, sunamount: 5, imageUrl: "data:image/jpeg;base64,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" },
      { plantid: 3, name: "Aloe Vera", infotext: "Schöne pflegeleichte Pflanze", wateramount: 1, sunamount: 3, imageUrl: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYVFRgWFhYYGRgaHCEeHBwcHBweHB4cIRgaHhohHhweIS4mHB4rHxoaJzgnKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHhISHzQkJCQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQxNDQ0NP/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAwQFBgcCAQj/xABFEAABAwEFBAcGAwYFAgcAAAABAAIRAwQSITFBBQZRYSIycYGRobEHE1LB0fBCYpIUFlNy4fEVIzNDohckNGNzgrLC0v/EABgBAAMBAQAAAAAAAAAAAAAAAAACAwEE/8QAIhEAAgICAwEAAgMAAAAAAAAAAAECERIhAzFBUSIyE0Jh/9oADAMBAAIRAxEAPwBtsLbjrBaRJJoVesDODpEntHotfpvDmhzSCCJBGRBWJWykyvTGN0dYHRpggzyVl9ne8pY/9irO/wDTcTOkhp4AjJShLwjCXhpaEIVSwIQuKj7oJOglAGU7zPD7bWPwkDwaJV73PrF9nHI/fZjKzZlW/Vqv+J7iZ4knLkrx7P6pLHt/C12HiZ9QoQ/YjF/kW9CEK5YEIQgAQhCABCEIAEIQgAQhCABCEIAEIQgAQhCABCEIAEIQgDGK9mdQqPpObdmXAH/k1V/bFBzHtewkRAnhGX3yWm+0ax/6VUDESO/o4d49CqXbKAfSIbqJbwznBQ/WRzyWLo0PcPecWylcef8AOpgXvzDIO+vNWtfPGytpVLFab7BdIPVORacwVum7+2WWui2qw8nN+F0CR5qsWVjK9EmoreW1+7s1R/5SB2wpVU32k2q5QDQesfv0RJ1E2TpGf7KIDScbxJmcldfZ29wqVWEi7AwHGdB3+SpFnZFOCcx4SrL7NLV/3FRrjiRhgccTPopR7JR7NPQhCuXBCEIAEIQgAQhCABRls2mG16dBuL3mXcmgE48CY+5S+1bc2hSfUdHRGAOrtB4qs7pxWtNSvmROMz1gBlpkfFJKW1FeiyltIuSEITjAhCEACEIQAIQo3bW12WZhc7F0dFup+gnVY3W2Y3Q/dUAIBOJyHHiu1V906tSu59oqxINxoGmro5Ygc1aFkZZKwTtWCEITGja32RtVjmOEyMOR0KyJjCx76eENJgciZHnI7wtmWcb92D3ddlVgj3kzwmR84KlyL0nyLVlU21sptRge1wDxmTryPBK+znb/AOzWi48xTqQ13Brp6DvHDsKWt1Jj2yeEzwVStNIseROHHQ46EJYsmmfSiy/2kWm+9jecdww9ZVm3F3hFpswvu/zKbenxLcYPlH91Qd4q/vbTMghpg48+CabtIpKVoQqU4b2BOPZvarlsDSYDpb38OSbWh8tcBmB94qN3dtRZamP4P8OJ54SliJE+gkLxpnFeq5cEIQgAQhCABCFH7c2h7ii9+uTf5j9k9yxulZjdKyp76bXL3iiwghkl05F0fISO2VL7j2E06DnOEF7uM4NETPbKoVCg+pWDS115z4nGZOYnvWvWaiGMawZNAA7go8dyk5MlD8pZMUQhCuWBCEIAEIVd3n3nZZmljCHVYwbPV5u+ixtLsxuhTebeRlkZo6o4dFk+buA9VmdlrV7daQ0uN957gPoBKhrda316he9xc5xknU6YcB9Fqe4O7xs7DVqNio/IHNrOfM5qTuTonuTLRYLI2jTbTZ1WiO3iTzJThCFZKioIQhAAoLe+we9s5gS5hvA8BGPy8FOrxwkQciskrVGNWqMco1L2RxxkYZzmPv1UFtOy4YA4a88/QjwVgt2zzQtFSmMg6W9kifkm9saC0gCc/HOPPzXOtM5lplf3e2k6hVa9pIiQeYOB7cFJ1jerPd4ffYoO0Urj8MipqxvL2BwzZ0Xdmh9R4JpfTfTurWieSgbHUIqT+b5qRt9QBjjGMeqgqLyM4wPzWxWhl0fSmy6wfRpvGrB6J2q9uJab9ipn4Zb4f3VhVV0WXQIQhaaCEIQALPN+dqX6gY09Gnnwva9qt28O0vcUiR13YNHz7lk9peXuxMknFQ5pf1I8sv6lr3Hs5qVS90RTl2uLjgM1oSgtz7D7qzNkQXm8ezTy9VOp+KOMSkI1EEIQqDAvHOAEkwBmTkmW1Nq0rOwvqPDRoJxPYFlO8++lS0ksZ0KeUA4ngSdexK5ULKSRat69+GsBp2Yhz8Zfo3D8PE81mVqrvqvc50yT0jGuuaYPeb0SSSrpuZu461PvvkU2mXH4jwnifRI7bJ7kyZ3C3UBItFVvRB6Adm4xmR8IK0lcsYGgNAgAQBwC6TxjSKpUCEITGghCEACEIQBR9/LNceytHRcCx3bofTwVOqYkmPPx8vRalvPYBWs7wc29Idwx8vRZeD0cc9fT1BXPNVI5+RVIhdoUdSJA9CNCmtgtAY+MS04HTAiD6+SnrcwOa1w0wdjnhhKrFoEO++5atozskbawElhIB0jskTy/ooN7CHEHQqWtLA+kHz0mQ04mSJ6J+XgoMOJKaPQ0ejaPZNbS+z1GEHoPBBORBbGHe1X1Zf7ILTjVZh1QefW/qfFagnXRWPQIQhMMC8c4AEnADNeqrb57YDGe5aek8dI8G/UpJyUVYspYqyq7ybXNaq5wPQbg3sGvemmw7Ca9ZjPiPgwYuJUdU6Tgwa59i0LcbZwax1cjrdFn8gzPefRc0VlLfpCKylstbGgAAZAQOxdISNqtTKbC97g1rRJJMBdh0iyqW9m+jLLDKd2pVOgODRzI15Ksb0+0Nz5p2aWMOBqHrH+UaDnms6rViTJJJ55pW76EcvhIbZ2zUtDy+o6TwnBRrnzgCmzn44ZqW2Vs11V7WMF57yB4lZVCD3dfYb7TVaxozPSdnDdSt32dYWUKbabBDWiOZOpPMqP3Y2AyyUgwAF5HTdxPAcgppbFelIxoEIQmGBCEIAEIQgAQhCAOXtkEcRCyDaFC497To9zVsKzLfaz3LS7g+HfXzJUeVaslyrVlYtEgGMvWB/UKCtNMiQD0SZ/urAWSYkaeqiLeBBIy+kx6pYEoiGz3gksd1XC6fke4we5RtSkWuIOBBg9ozTgkNIg9o4H5pbarrwY+BiLriJxcIgnTqx4FOtMdaZbPZVWc21BoiHNcHeEjzC2dYb7N6hZbaX5pA8CPFbkmiVj0CELwlOMNtpW1tGm57sgMBxOgWTbUtznvc956RMn5BTu9O2/fPut/02SAPidkSqo9pe4MHaVxzllKl0jmnLJ0h9sSxOqvY0YOqGByaese5oK1+zUGsY1jRDWgAdgELONgbSs9ka+0Vn4gXKbRi50dYxoMhJgZqvbyb+2i0SxjvdU/haekR+Z3yGCrx0lY8Woo0HeTfehZpYwipV+Fp6LT+Z3yGKyTbu8Ve1OvVXkjRowY3sb881DmrJAPivHkDAY8cVTvs1ts6LwGzOPyhNmkuN1q6b0sBM8Qn1GgGAHM/fD7zW9B0d0bLdusGL36DScMSNeXDNbPuNuuLKwPeJquH6Rw7VA+zjdkhxtNVkfACPMDgPvJaUhK9jRXrBCYW7a9KlAc8Xjk0YmeCesJIBIgxiOHJbauhrOkIQtNBCEIAEIQgAQhCABUff8As8vY78p8pKvCqntBZ/kMOofA7wZSci/ESf6szhxERnz4j+xCjrSJEaJ1fGIzJy455pvaRqoI5kQdYQU9s9E1GFoEki8wcS3MDnE+Ka2lwLYPWBOPI8fvVd2Ctde08CPVVfRUmdxCf26z59cLfl8/bpi5b6TdG1gO6/A8iF9ApoFIgqpvjt4Ux7lh6Th0zwB07Spnbm1G2emX4XjIYOJ+gWR221l7y5ziS7FxPGTKTll/VC8kq0jm22jAleWZ9xhc7AmZJ4Zk+Ca0em/k1Ibw2uGhgOLs+TRl4n0UYx8JJEbtbaRrvDroYGtaxrR8LRx1JJJJ4kqOfUXJqJMldKVFUjpetl2Ay1XDBPYn1JsDAD7KY1ndlYGiSrbuJsf9rtEvbNNnSOYHIff1VZYH1XNYTgAABOAaJx8ye9W1m8TbPQFCjg38RA6x4k6qcmLezU7VtihSbF4GBgG44acgqZtvfhxNymQOzE95VDftN7zBcfOO9W3cfds13mtUbFJp7nu4D8o18ErlJ6NyctE1uZsZ9RwtNcGM2A/iPxEcOCva8AheqsYpIolSBCEJjQQhCABCEIApe7m+N9zadVr8cA+6c9LwGnNXMOHELF2jW84xwOvdwSwq1WwWveP/AHE4rnXI12QXK0tqzY1Ut+a3RYztd3/2BVRs+2bSw9F7/GR5pO0bSqVXB1Q33DDpDtGnInxRLluNULPmTXRDVOue04ff3gm1paTM4Y6ZfeClX2YOxbg6cj1f7plaWZ4KakTjJPor9o1SNI6p3asCRx8M5++xMgF0LoquicsVT/u7M4AAl1MnmQ+6TjrDQt62jtBlFt55gY9uAJOHd5r56ZaLjadX8THSBGeox4S13irXS2nWrsqVq7yS+8Q04NawNN1rQMAMfFJKWKtG5Yo53h28+0VS6Ybk1ugbw7VCVqhcYGZSD6kp1s+n+M9yRqtsX/WPWgNZ0iBq5xyHbwAVLt9pvvc6ZBOGmAwHkpfeHaHR92Mzi7s/CPn4KuyqccfWPFenZcvQyRM65JOZ+SWDYGqqOLWY4H7Cc1HFsjI5EEY/0KQonAGMB4zxTqkAxvvDmTDAcZcMyR8I8yY4rGxWOzUNFgYIvv6TjgS1ujTwnMjsSVF94GQXaCMBPOM0jQoF3SfOMnm4zw7dVfNy90jaHe8ewspCI4uPAT5nmkoyjncrdB1oIqVRFIHHi48Atco0msaGtAa0CABkAvKNJrGhrAGtAgAZBKJ4xoqlQIQhMaCEIQAIQhAAhCEAYBTtTgIEDyTpm1HDNp7sQVXbFUdBbwx7lxXqOBOJ9FBxObEudG1teIJg+EJb3YP4gTxVHp7Uc3Ppdv1Ups3a97EPg/Cc+7iklBoSUGT9wgkH0z7EjaRebzaPLVe2baDXAX5n71TqtREEg4E/cqW0yWLTtFOtYxKYvBgqRtTIJHOOcJmKcnDJdMXo6Y9DqztBDGkTBkczp5z4q0WqKVnLfyxj8Ts/UqG2PZ5feIwbx46JfbdrLrrOGJ+XzUZflJIm9uiMpMvGFI1rQ1jSSYDc/vimNN10JLaFC+A0vDQDiIkzp4J2rex+yBtVa+9zj+Iz3aeUJPtUxTsFETIe/nMeQS7KFMYCm08zJ9SrZJFMkQ1JokSYGpAkrpon5K12azteLtyn0WzBDR3CRmnFNgaJFNgDgR1WwRkRl5JHy/4LmVqysJkk3WN6zh6Di46BOadFrgXuN1uTWyMhp96kqd9ywtj3TLszF0Bt6InDWJSYugwaTI0lp8sfMLP5L8DIndyt1XWl4rVAW0WnAZXiNByWtUqbWNDWgBoEADIBZtZd96tNjWNp07rRAABA8nJ07f2s0BzqDIw+IGCDGvJapxQ8ZRRoSFRKHtBLv9gfrjIScwl2e0Gnk6i8HkQfWE/8kTc4l0Qq1Zt9rK+Jc5h4ObPm0lSdDbtmfF2uzHi4D1WqUX6apJkkhcseHCWkEcQZHkukwwIQhAAhCEAfMdqoOYZBxCRFQuBnP7wUsagtDLzYDwYe3tnEcjCY1rI9gMgFrsMsj8ipp/SBH2o4JrSqQU9r0wWZ9JubeI4hRgTjonLLtEggHxU7YNqlsjrA6clSmOUjZbQklFMSUUyf2qJIcOqcvmEya0ucIzyH0RRtIiCJBzE/cFP7GWsxGM5HX+6T9UTulRN7MsQDQCY7M5TsbGoEy4FxPFx+Sim23mun7SDBLnQPvRczjO9MmsiW/wAGs2Jun9TlyzYtlEy1xwOb3fJV5+8DeDjh2dgK9s+2i7o3CCfzYctEYcn0aplpo7PszAbtJhnA3gXHhm7LuSNWzWbAe7a2NW4H+veoGjbXvJxiMMB9U5LGR0n/APLVC45es1Rl6x5+zU2BzmvgOGRbORyJBy7tFEtqvJOIiZAj68gE4q3IgSewOK7Y8nNhOMiG8c8+wYJ0muxkhCX8Y14j7K7s1MF7b7nQcJaQLuuoOXBOCx8YU47SFy+hVdhcYO05pjRtNRxgH0levtDwxrH3nXXEgZgzGHLLzXTrFUAi+G9k4pJ2zXnJ8nvyQqMOXVbogzwiG5jPLIZLkWoxPQIEiDrAH1wS3+DuGM56kSj/AAc4Zdoz7+CfRuhq7ajgxzA2LzgTGGAmBPePDmmtJ4BEyD3xKmH7KeMC9w1062hkpB9hA/3Wic8Rj2ieZRaN0eWPaVRjpY9zSTjBLBOOcEKcs2/NpZANQH+Zgd5ghQjdnUyMarI7R8kqLHTH+7TI7f6ITXgJly2d7QyTdq029rSeI0g8Z7lNUd+LI5xa55aZIk5GDEg8Fl/7KwmL7I/mavTsgPfda9hAEzfATKbXoymzXv3nsv8AGb4oWUfu9/5lP9Q+iFubNzZRqlV1J95uoxGhxUs1wq07wc48ROR+9Ux2lQwOGSbbMtRY6dMiOSbsztC72AAjG8PAg5gqJqMgwp+1U56TclFW1gwcO8cFqNixq0pai9NwF0wrRmSVOsnlnr6KHY9PaRwwStCOJJftZGWKbV6peZy5BDWEn56Jf3DW9Zw7kmkZSQgxk6KSs1kLjkZ5Js21U2c+cTj4gLtm3IHR0HGPTPsWPJ9BsmadnjCACpSz08DkMBgO3j24qoDbjzk4DHINHDDFxleNtL6kzVE6BznQTwwEBJ/HL6Y4subnsZ1ntB4Ejs8UiNr0WzJLuF3j3hSW5u7FjqMD7TVpve44U21LoaNJgguJieGKvFl3UsbB0aDHYky4XszMcIECByWrhv01cd+mYf40yTcY93hrlqu6O0a1QA07M5wywDvkOC2GnY6bOrTY3sa0egSwwyTLhSGXEjIXWW3va2LMWt06DpngcfMqQp7p7RdN57G/p4ZZE54LT0J1xRGXHEy39xLcXNDqzLurrxEY4w0DFO2+zmp+K0k97lo6FuETcIlBZ7NmEgvrOJzkeUApdvs3s89Ko8jlAOkY4+iu6FuKDFFTp+z+xgQWvJ43o8ohK/uJYf4bv1lWdCMUbSKofZ/Y4i6/9Q+ibn2dWbGH1ROt5pMfpVzQjGIYoo//AE1s/wDFq+I+i9V3QjFBijAd6dmGlWezTzCp4p3Xlp7uxbn7R9hX2e+Y2SMHRnyKxTaVMhwcNMClWtE6p0K2Bry5zW9KSBd4zzOWiYurC8ZEDIjUeOqsOxKN4Fw4/IKQt+y6dZvSbdfODmgXsvxfEFjkkzMknso1UXThkuqbmnOW8xj5J5tPZT6X52fhe3qkc+HeotUWyipof0rG90XLr50BE94KBWc0wQWnmI9U0Y+FI0toOgAmYOF4Bw80CuxM2snNxSbq/BPmspPzZd/lJHkZCUOyQT0HB40Bwd54HuKW0jLRF3562K8aDx7oUjUsJY669paeB4HKOK7FmRkjchow3ZBgcc+UBKUntGYnvUlZTGOek5GCIOK6tWzWvEs6D5ydg2IybAw1WZIzJDWnbw3qkjzTyht6o0iKr26dElukZghQ1rs7qTrj2gOgHORBEiCMCkDUAW0jaRfLN7QbSwge+c4fmg+oKmrN7UqgPSaxw4FpB8RA8llPvMF6wyY9T81tGm2WX2oUyQH0S0HVrwT+mPmp2yb82J+dS4eD8D5Er54pEk4Z8zHmU5osfIzxMBGwtn01YtoUqoDqdRjwcrpB7U6XzjZLZVYHOY4wwgmCBBmARGePDirfsjf20sADzfGHXxjvGJwRl9Ny+mvoVR2bv7Z3mHtfTMZmC3yxGY01Vos1qZUF5j2vHFpBWppmppiyEIWmghCEACEIQBxVphwLXCQc1i2/m67qD3Fs3HzBz5xPFbYm1usTKzCx7Q5p+8ErVitWfP8AuoYe+k7rDpD5x5Ker0pBHEKQ3g3ArUXivZYfcdIbkSNWnukd6ZufeF4AjQtOBa4ZtI0IUZpp2SlFoiqj/dyCLzXC6W6Ec9Cq5tDY4Mvo4jMs1HYdRyVvtFMOiVGCyOY83T2HTLGea2MqBNx6KJC7Do1Vq2rscVG32QH5OA1PPgVWn2Rw0VYyTKqSZ7SrcU+s9bDNRRBGYXdN3MrWjHEtFk2j0brxfaMgcY7OHcpH9ipVGdB0OnBpdh3E/NVGjaBGMqVsloH4XY8jj4KUo/Cbi10P6tBzYBBaeYw8RglKTHNGV7XinVh2mSCx4DmnCD5Qun2csl7SXMzIGYPEjgsv6Kc0mgge8Y17QZhwB8JyVX2hsdzDLZcwnou+TuBCthPPoxh2/cry71mwbv4mka/Ioi2hk2ims2eSnDdmv4eOHqpDaL6tJ34S09VxY3LUHgQmottXiP0j6Kltj2wZs6oMYGGid07I/wCDxgDzISDNpVmgGR+lv0Sh2zVdmGYflAWOzNjqmxwwcw8jH0kHxS4pyCQHQ3MwRH3KYM25U4N8P6pentx2N5jfPHCMphZszY7puhwBiDyJOGp5T6KVstqezpU3EHS6YOmeOSgm7VY7NhbzBnyS7NosElxMEYYAYjmM1hhoVg32ey62q2+DhIwPaTkrPYN5KFQda4eDvqsYdag4dGpHDpO9E/stoIAHvJIzyynDSfNClJGqTRt7HhwlpBHEGQulklj2/VpOBY6R/NDe8HNWjZ++zSbtRoBmMMO3tTqa9HU0y5oUL+8tD4kLckNkiaQhCY0FHbS2RSrNcHMbecOsAL0jLHVSC8JWNWBke2tlPs7rr2m7+F/4T36FRRdGC2q0UmvaWPaHNOBBEgqj7W3EJl1neI+B84djx8x3qT466Jyj8KdQYC2MuMcU2qbJDgbsSc8c06tlirUHkPY9sZmCWnscMCkm1CcWpGmibiytW/Zgb26j7zUdTszYJdIAV59y+0m4GXn6OjEDny5p4/cNj2APqvDvxXQ0tnlIkqkG2tjxTa2Zc93ARyQ1xHFaK/2bj8Nc97Po5In2bP0rt/Qf/wBKg9FOsu0XNIvYjjqPqrLYNoAFpB6OpCef9Nn/AMZv6XfVPNm+zmqHf+IY0a9BxnukJZRsyUbEPcB4vMwcfwkwDqY4FIU3nHAg6jWZxU5tXdutZYe0+9piMQCCD+Zug5qODhUzwcMLwy71J2uyTTXY3tND3jCwGHHFpIycMu45KK2Zuhb62LKTxjEu6I54nAjsUxL2uhzZGhxjt5LSdzNt32Ck89IDoHiOE8QmhLdDQfjKFY/ZjbnGH1GMEZl16O4BT9i9lxH+paieIZTbn2u+i0pCriVpFOs3s6srTLy9/wDNcA/4sCeN3FsH8AHvKsqEYo2ioVvZ1YHTDHtng84dkqLtHsqokQys8fzNB9CFoaEYoykZS72VVMYrs5SHcfJR9f2a21jhcNN44h0eIcFsyFlGYoxX90doNaWGk4tBwuuYZPjMJmdlWyjg+hVxnG4XDxEhbshY4mYIxG5bP4Nb9D0LbpQjAMECEITjni5chCAEyhCEARdqzKgbdmhCSQrOtmZPTkoQhdDLoUbklGIQmAVXdPNCEGjh/VPYfRZCzrv/AJv/ALIQpchHkJK1ZHsUhux16f8AOP8A5BCFOPZOPZqSEIXUdAIQhBoIQhAAhCEACEIQAIQhAH//2Q==" },
    ]
  }
}
