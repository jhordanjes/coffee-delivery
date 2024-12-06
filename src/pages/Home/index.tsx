import { useTheme } from 'styled-components'
import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import { 
    Background, 
    Banner, 
    BannerContent, 
    CardWrapper, 
    FeatureHighlights, 
    MainContent, 
    Subtitle, 
    Title 
} from "./styles";
import bgBanner from '../../assets/bg-banner.svg';
import banner from '../../assets/banner.png';
import response from '../../data.json';
import { Card } from './components/Card';

export function Home() {
    const { data } = response;
    const theme = useTheme();

    return (
        <>
            <Banner>
                <BannerContent>
                    <div>
                        <Title>Encontre o café perfeito para qualquer hora do dia</Title>
                        <Subtitle>
                            Com o Coffe Delivery você recebe seu café onde estiver, a qualquer hora
                        </Subtitle>

                        <FeatureHighlights>
                            <div>
                                <ShoppingCart
                                    size={32}
                                    weight="fill"
                                    color={theme.colors.background}
                                    style={{ backgroundColor: theme.colors['yellow-dark'] }}
                                />
                                <span>Compra simples e segura</span>
                            </div>

                            <div>
                                <Package
                                    size={32}
                                    weight="fill"
                                    color={theme.colors.background}
                                    style={{ backgroundColor: theme.colors['base-text'] }}
                                />
                                <span>Embalagem mantém o café intacto</span>
                            </div>

                            <div>
                                <Timer
                                    size={32}
                                    weight="fill"
                                    color={theme.colors.background}
                                    style={{ backgroundColor: theme.colors.yellow }}
                                />
                                <span>Entrega rápida e rastreada</span>
                            </div>

                            <div>
                                <Coffee
                                    size={32}
                                    weight="fill"
                                    color={theme.colors.background}
                                    style={{ backgroundColor: theme.colors.purple }}
                                />
                                <span>O café chega fresquinho até você</span>
                            </div>
                        </FeatureHighlights> 
                    </div>

                    <img src={banner} alt="" />
                </BannerContent>
                

                <Background src={bgBanner} id="hero-bg" alt="" />
            </Banner>

            <MainContent>
                <h3>Nossos cafés</h3>
                
                <CardWrapper>
                    {data.map(item => <Card key={item.id} coffee={item} />)}
                </CardWrapper>
            </MainContent>
        </>
    )
}