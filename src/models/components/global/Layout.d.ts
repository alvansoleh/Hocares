declare namespace MComponentGlobalLayout {
    interface Center {
        children?: React.ReactNode;
    }
    interface Title {
        title?: string;
        at: number;
        is_show_back?: boolean;
        children?: React.ReactNode;
        onBack?: () => void;
    }
}