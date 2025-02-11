import { createContext, type ReactNode, useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router";

interface TabsProviderProps {
    children: ReactNode;
}
interface Tab {
    name: string;
    id: string;
    url: string;
}

interface TabsContextProps {
    activeTabs: string | null;
    tabsValue: Tab[];
    handleTabs: (newTab: string) => void;
}



export const tabsContext = createContext({} as TabsContextProps);

export const tabsValue = [
    {
        name: 'Explorar',
        id: 'explore',
        url: ''
    },
    {
        name: 'Meus filmes',
        id: 'my-movies',
        url: ''
    }
]



export function TabsProvider({ children }: TabsProviderProps) {
    const [activeTabs, setActiveTabs] = useState<string | null>(tabsValue[0].id);
    const location = useLocation()

    const navigate = useNavigate();
    function handleTabs(newTab: string) {
        const isOnAppRoute = location.pathname === '/app';
        const tabData = tabsValue.find(item => item.id === newTab);

        if (!isOnAppRoute) {
            setActiveTabs(newTab); // Reseta se estiver fora da rota
            navigate("/app"); // Redireciona para app com a tab selecionada
            return;
        }

        // Se já estiver em /app, apenas atualiza a aba ativa e navega
        setActiveTabs(newTab);
        if (tabData) navigate(tabData.url);
    }

    return (
        <tabsContext.Provider value={{ activeTabs, handleTabs, tabsValue }}>
            {children}
        </tabsContext.Provider>
    );
}

export const useTabs = () => {
    return useContext(tabsContext);
};
